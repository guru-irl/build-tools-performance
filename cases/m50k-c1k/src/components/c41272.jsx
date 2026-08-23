import React from 'react';
const LABEL_41272 = 'component_41272';
export function Component41272({ value = 41272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41272, 'data-value': derived.doubled }, children);
}
export default Component41272;
