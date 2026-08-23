import React from 'react';
const LABEL_41119 = 'component_41119';
export function Component41119({ value = 41119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41119, 'data-value': derived.doubled }, children);
}
export default Component41119;
