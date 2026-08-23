import React from 'react';
const LABEL_39021 = 'component_39021';
export function Component39021({ value = 39021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39021, 'data-value': derived.doubled }, children);
}
export default Component39021;
