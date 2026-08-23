import React from 'react';
const LABEL_40205 = 'component_40205';
export function Component40205({ value = 40205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40205, 'data-value': derived.doubled }, children);
}
export default Component40205;
