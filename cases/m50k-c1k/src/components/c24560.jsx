import React from 'react';
const LABEL_24560 = 'component_24560';
export function Component24560({ value = 24560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24560, 'data-value': derived.doubled }, children);
}
export default Component24560;
