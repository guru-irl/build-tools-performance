import React from 'react';
const LABEL_42205 = 'component_42205';
export function Component42205({ value = 42205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42205, 'data-value': derived.doubled }, children);
}
export default Component42205;
