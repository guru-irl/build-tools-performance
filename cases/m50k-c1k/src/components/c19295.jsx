import React from 'react';
const LABEL_19295 = 'component_19295';
export function Component19295({ value = 19295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19295, 'data-value': derived.doubled }, children);
}
export default Component19295;
