import React from 'react';
const LABEL_4320 = 'component_4320';
export function Component4320({ value = 4320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4320, 'data-value': derived.doubled }, children);
}
export default Component4320;
