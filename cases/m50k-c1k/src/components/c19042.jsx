import React from 'react';
const LABEL_19042 = 'component_19042';
export function Component19042({ value = 19042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19042, 'data-value': derived.doubled }, children);
}
export default Component19042;
