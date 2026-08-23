import React from 'react';
const LABEL_19220 = 'component_19220';
export function Component19220({ value = 19220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19220, 'data-value': derived.doubled }, children);
}
export default Component19220;
