import React from 'react';
const LABEL_42894 = 'component_42894';
export function Component42894({ value = 42894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42894, 'data-value': derived.doubled }, children);
}
export default Component42894;
