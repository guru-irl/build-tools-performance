import React from 'react';
const LABEL_4534 = 'component_4534';
export function Component4534({ value = 4534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4534, 'data-value': derived.doubled }, children);
}
export default Component4534;
