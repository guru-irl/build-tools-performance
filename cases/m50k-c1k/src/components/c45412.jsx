import React from 'react';
const LABEL_45412 = 'component_45412';
export function Component45412({ value = 45412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45412, 'data-value': derived.doubled }, children);
}
export default Component45412;
