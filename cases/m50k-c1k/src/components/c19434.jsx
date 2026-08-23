import React from 'react';
const LABEL_19434 = 'component_19434';
export function Component19434({ value = 19434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19434, 'data-value': derived.doubled }, children);
}
export default Component19434;
