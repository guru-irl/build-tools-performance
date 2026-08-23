import React from 'react';
const LABEL_5298 = 'component_5298';
export function Component5298({ value = 5298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5298, 'data-value': derived.doubled }, children);
}
export default Component5298;
