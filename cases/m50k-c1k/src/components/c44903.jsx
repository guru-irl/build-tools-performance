import React from 'react';
const LABEL_44903 = 'component_44903';
export function Component44903({ value = 44903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44903, 'data-value': derived.doubled }, children);
}
export default Component44903;
