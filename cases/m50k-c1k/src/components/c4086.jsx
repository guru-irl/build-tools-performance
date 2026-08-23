import React from 'react';
const LABEL_4086 = 'component_4086';
export function Component4086({ value = 4086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4086, 'data-value': derived.doubled }, children);
}
export default Component4086;
