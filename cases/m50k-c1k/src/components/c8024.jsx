import React from 'react';
const LABEL_8024 = 'component_8024';
export function Component8024({ value = 8024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8024, 'data-value': derived.doubled }, children);
}
export default Component8024;
