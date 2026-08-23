import React from 'react';
const LABEL_45590 = 'component_45590';
export function Component45590({ value = 45590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45590, 'data-value': derived.doubled }, children);
}
export default Component45590;
