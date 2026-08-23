import React from 'react';
const LABEL_15418 = 'component_15418';
export function Component15418({ value = 15418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15418, 'data-value': derived.doubled }, children);
}
export default Component15418;
