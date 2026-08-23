import React from 'react';
const LABEL_19430 = 'component_19430';
export function Component19430({ value = 19430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19430, 'data-value': derived.doubled }, children);
}
export default Component19430;
