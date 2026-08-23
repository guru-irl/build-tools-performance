import React from 'react';
const LABEL_19615 = 'component_19615';
export function Component19615({ value = 19615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19615, 'data-value': derived.doubled }, children);
}
export default Component19615;
