import React from 'react';
const LABEL_36735 = 'component_36735';
export function Component36735({ value = 36735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36735, 'data-value': derived.doubled }, children);
}
export default Component36735;
