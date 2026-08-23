import React from 'react';
const LABEL_41320 = 'component_41320';
export function Component41320({ value = 41320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41320, 'data-value': derived.doubled }, children);
}
export default Component41320;
