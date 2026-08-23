import React from 'react';
const LABEL_4119 = 'component_4119';
export function Component4119({ value = 4119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4119, 'data-value': derived.doubled }, children);
}
export default Component4119;
