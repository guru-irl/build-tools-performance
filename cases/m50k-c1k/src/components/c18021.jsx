import React from 'react';
const LABEL_18021 = 'component_18021';
export function Component18021({ value = 18021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18021, 'data-value': derived.doubled }, children);
}
export default Component18021;
