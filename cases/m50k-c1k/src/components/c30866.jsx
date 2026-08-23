import React from 'react';
const LABEL_30866 = 'component_30866';
export function Component30866({ value = 30866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30866, 'data-value': derived.doubled }, children);
}
export default Component30866;
