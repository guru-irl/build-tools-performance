import React from 'react';
const LABEL_29974 = 'component_29974';
export function Component29974({ value = 29974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29974, 'data-value': derived.doubled }, children);
}
export default Component29974;
