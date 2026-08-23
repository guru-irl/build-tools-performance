import React from 'react';
const LABEL_39498 = 'component_39498';
export function Component39498({ value = 39498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39498, 'data-value': derived.doubled }, children);
}
export default Component39498;
