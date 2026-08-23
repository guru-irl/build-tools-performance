import React from 'react';
const LABEL_46168 = 'component_46168';
export function Component46168({ value = 46168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46168, 'data-value': derived.doubled }, children);
}
export default Component46168;
