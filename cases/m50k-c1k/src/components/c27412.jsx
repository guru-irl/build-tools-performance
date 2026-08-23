import React from 'react';
const LABEL_27412 = 'component_27412';
export function Component27412({ value = 27412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27412, 'data-value': derived.doubled }, children);
}
export default Component27412;
