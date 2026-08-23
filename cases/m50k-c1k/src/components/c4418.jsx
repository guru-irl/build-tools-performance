import React from 'react';
const LABEL_4418 = 'component_4418';
export function Component4418({ value = 4418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4418, 'data-value': derived.doubled }, children);
}
export default Component4418;
