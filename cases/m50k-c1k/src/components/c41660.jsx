import React from 'react';
const LABEL_41660 = 'component_41660';
export function Component41660({ value = 41660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41660, 'data-value': derived.doubled }, children);
}
export default Component41660;
