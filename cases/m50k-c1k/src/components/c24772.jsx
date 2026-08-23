import React from 'react';
const LABEL_24772 = 'component_24772';
export function Component24772({ value = 24772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24772, 'data-value': derived.doubled }, children);
}
export default Component24772;
