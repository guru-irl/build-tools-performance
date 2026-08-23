import React from 'react';
const LABEL_4942 = 'component_4942';
export function Component4942({ value = 4942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4942, 'data-value': derived.doubled }, children);
}
export default Component4942;
