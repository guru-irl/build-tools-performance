import React from 'react';
const LABEL_24220 = 'component_24220';
export function Component24220({ value = 24220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24220, 'data-value': derived.doubled }, children);
}
export default Component24220;
