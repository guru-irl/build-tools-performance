import React from 'react';
const LABEL_8848 = 'component_8848';
export function Component8848({ value = 8848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8848, 'data-value': derived.doubled }, children);
}
export default Component8848;
