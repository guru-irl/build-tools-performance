import React from 'react';
const LABEL_45404 = 'component_45404';
export function Component45404({ value = 45404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45404, 'data-value': derived.doubled }, children);
}
export default Component45404;
