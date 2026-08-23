import React from 'react';
const LABEL_46618 = 'component_46618';
export function Component46618({ value = 46618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46618, 'data-value': derived.doubled }, children);
}
export default Component46618;
