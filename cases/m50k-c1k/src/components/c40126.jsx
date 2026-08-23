import React from 'react';
const LABEL_40126 = 'component_40126';
export function Component40126({ value = 40126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40126, 'data-value': derived.doubled }, children);
}
export default Component40126;
