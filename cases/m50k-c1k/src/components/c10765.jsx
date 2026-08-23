import React from 'react';
const LABEL_10765 = 'component_10765';
export function Component10765({ value = 10765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10765, 'data-value': derived.doubled }, children);
}
export default Component10765;
