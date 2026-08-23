import React from 'react';
const LABEL_15924 = 'component_15924';
export function Component15924({ value = 15924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15924, 'data-value': derived.doubled }, children);
}
export default Component15924;
