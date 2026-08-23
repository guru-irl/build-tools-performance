import React from 'react';
const LABEL_19107 = 'component_19107';
export function Component19107({ value = 19107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19107, 'data-value': derived.doubled }, children);
}
export default Component19107;
