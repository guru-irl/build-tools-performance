import React from 'react';
const LABEL_4706 = 'component_4706';
export function Component4706({ value = 4706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4706, 'data-value': derived.doubled }, children);
}
export default Component4706;
