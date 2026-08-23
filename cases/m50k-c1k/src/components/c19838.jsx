import React from 'react';
const LABEL_19838 = 'component_19838';
export function Component19838({ value = 19838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19838, 'data-value': derived.doubled }, children);
}
export default Component19838;
