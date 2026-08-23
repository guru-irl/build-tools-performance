import React from 'react';
const LABEL_35259 = 'component_35259';
export function Component35259({ value = 35259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35259, 'data-value': derived.doubled }, children);
}
export default Component35259;
