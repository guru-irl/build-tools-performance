import React from 'react';
const LABEL_18819 = 'component_18819';
export function Component18819({ value = 18819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18819, 'data-value': derived.doubled }, children);
}
export default Component18819;
