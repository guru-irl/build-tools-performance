import React from 'react';
const LABEL_1418 = 'component_1418';
export function Component1418({ value = 1418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1418, 'data-value': derived.doubled }, children);
}
export default Component1418;
