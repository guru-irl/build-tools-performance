import React from 'react';
const LABEL_22903 = 'component_22903';
export function Component22903({ value = 22903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22903, 'data-value': derived.doubled }, children);
}
export default Component22903;
