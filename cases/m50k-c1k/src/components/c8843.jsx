import React from 'react';
const LABEL_8843 = 'component_8843';
export function Component8843({ value = 8843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8843, 'data-value': derived.doubled }, children);
}
export default Component8843;
