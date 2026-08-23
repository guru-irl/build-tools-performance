import React from 'react';
const LABEL_35244 = 'component_35244';
export function Component35244({ value = 35244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35244, 'data-value': derived.doubled }, children);
}
export default Component35244;
