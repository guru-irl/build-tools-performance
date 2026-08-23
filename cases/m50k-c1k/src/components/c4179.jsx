import React from 'react';
const LABEL_4179 = 'component_4179';
export function Component4179({ value = 4179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4179, 'data-value': derived.doubled }, children);
}
export default Component4179;
