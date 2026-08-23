import React from 'react';
const LABEL_514 = 'component_514';
export function Component514({ value = 514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_514, 'data-value': derived.doubled }, children);
}
export default Component514;
