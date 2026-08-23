import React from 'react';
const LABEL_19903 = 'component_19903';
export function Component19903({ value = 19903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19903, 'data-value': derived.doubled }, children);
}
export default Component19903;
