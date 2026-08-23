import React from 'react';
const LABEL_19026 = 'component_19026';
export function Component19026({ value = 19026, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19026, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19026, 'data-value': derived.doubled }, children);
}
export default Component19026;
