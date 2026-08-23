import React from 'react';
const LABEL_866 = 'component_866';
export function Component866({ value = 866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_866, 'data-value': derived.doubled }, children);
}
export default Component866;
